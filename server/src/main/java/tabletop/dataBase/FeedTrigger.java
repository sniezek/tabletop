package tabletop.dataBase;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.h2.tools.TriggerAdapter;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * Created by ja on 23.04.17.
 */
public class FeedTrigger extends TriggerAdapter {

    private List<String> ColumnNames = Arrays.asList("PASSWORD,USERNAME,LIPA".split(","));


    @Override
    public void fire(Connection conn, ResultSet oldRow, ResultSet newRow) throws SQLException {
        Map<String,String> map = new HashMap<>();
        HttpClient httpClient = HttpClientBuilder.create().build();
        String url = "http://localhost:9000/updateDB";

        try {
            populateMap(newRow, map);
            HttpPost request = new HttpPost(url);
            StringEntity body = new StringEntity( new ObjectMapper().writeValueAsString(map));
            request.addHeader("content-type", "application/json");
            request.setEntity(body);
            HttpResponse response = httpClient.execute(request);

        } catch (JsonProcessingException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    private void populateMap(ResultSet newRow, Map<String, String> map) {
        for (String name :
                ColumnNames) {
            try {
                map.put(name, newRow.getString(name));

            }catch (SQLException e){

            }
        }
    }
}
