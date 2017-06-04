package tabletop.db;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.h2.tools.TriggerAdapter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FeedTrigger extends TriggerAdapter {
    private static final Logger LOGGER = LoggerFactory.getLogger(FeedTrigger.class);
    private static final List<String> COLUMN_NAMES = Arrays.asList("PASSWORD,USERNAME,LIPA".split(",")); // wtf?
    private static final String URL = "http://localhost:9000/updateDB";

    @Override
    public void fire(Connection conn, ResultSet oldRow, ResultSet newRow) throws SQLException {
        Map<String, String> map = new HashMap<>();
        HttpClient httpClient = HttpClientBuilder.create().build();

        try {
            populateMap(newRow, map);

            HttpPost request = new HttpPost(URL);
            StringEntity body = new StringEntity(new ObjectMapper().writeValueAsString(map));
            request.addHeader("content-type", "application/json");
            request.setEntity(body);

            HttpResponse response = httpClient.execute(request);
        } catch (IOException e) {
            LOGGER.error(e.getMessage(), e);
        }
    }

    private void populateMap(ResultSet newRow, Map<String, String> map) {
        for (String name : COLUMN_NAMES) {
            try {
                map.put(name, newRow.getString(name));
            } catch (SQLException e) {
                LOGGER.error(e.getMessage(), e);
            }
        }
    }
}
