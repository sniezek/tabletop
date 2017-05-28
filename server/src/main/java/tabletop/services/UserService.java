package tabletop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tabletop.domain.user.PasswordResetToken;
import tabletop.domain.user.User;
import tabletop.repositories.PasswordResetTokenRepository;
import tabletop.repositories.UserRepository;
import javax.mail.Session;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.*;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Optional<User> getUserByUsername(String username) {
        return Optional.ofNullable(userRepository.findByUsername(username));
    }

    public Optional<User> getAuthenticatedUser() {
        return getUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
    }

    public User addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    public User editMail(User user) {
        User edited = userRepository.findByUsername(user.getUsername());
        edited.setEmail(user.getEmail());
        //user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(edited);
    }

    public User editPassword(User user) {
        User edited = userRepository.findByUsername(user.getUsername());
        edited.setPassword(passwordEncoder.encode(user.getPassword()));
        //user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(edited);
    }

    public User remindPassword(String email) {
        String newemail = email.substring(email.indexOf(":")+2,email.length()-2);
        User user = userRepository.findByEmail(newemail);
        String uuid = UUID.randomUUID().toString();

        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.add(Calendar.DATE, 3);

        PasswordResetToken token = new PasswordResetToken();
        token.setToken(uuid);
        token.setUser(user);
        token.setDate(cal.getTime());

        passwordResetTokenRepository.save(token);
        sendEmailWithPassword(newemail,uuid,user.getId());
        user.setPassword(passwordEncoder.encode(uuid));

        return userRepository.save(user);
    }

    public String redirectToChange(String tokenId, Long id) {
        PasswordResetToken token = passwordResetTokenRepository.findByToken(tokenId);
        if (token != null) {
            if (token.getUser().getId()==id) {
                if (token.getDate().after(new Date())) {
                    passwordResetTokenRepository.delete(token);
                    return "token="+tokenId+"&id="+id;
                }
                else return "expired";
            }
            else return "notvalidid";
        }
        else {
            return "tokennotexist";
        }

    }

    private void sendEmailWithPassword(String email, String token, Long userid) {

        final String username = "tabletopremind@gmail.com";
        final String mailPassword = "userfunct123";

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, mailPassword);
                    }
                });

        try {

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.addRecipient(Message.RecipientType.TO,new InternetAddress(email ,
                    false) );

            message.setSubject("Remind password");
            message.setText("Here is link where you can change your password. Please change it,"
                    + "\n\n as soon as possible! localhost:3000/user/reset?token=" + token
            +"&id="+userid);

            Transport.send(message);

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

}
