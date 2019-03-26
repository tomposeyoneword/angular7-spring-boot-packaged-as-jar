package com.payfone.service.provider.controller;

import java.net.URI;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
public class TrustScoreController extends PayfoneApiController {

    // URL
    private static final String V1 = "/v1";
    private static final String PATH = "/trust/";

    // Headers
    private static final String REQUEST_ID = "request-id";
    private static final String CONSENT_STATUS = "consent-status";
    private static final String API_CLIENT_ID = "api-client-id";
    private static final String DEFAULT_CLIENT = "abacadaba";

    private final String host;
    private final RestTemplate restTemplate;

    @Autowired
    public TrustScoreController(@Value("${lynx.host}") String host, RestTemplateBuilder builder) {
	this.host = host;
	this.restTemplate = builder.build();
    }

    @GetMapping("/trust-score")
    public ResponseEntity<String> getTrustScore(@RequestParam("phoneNumber") String phoneNumber) {
	String url = host + PATH + phoneNumber + V1;
	URI uri = UriComponentsBuilder.fromHttpUrl(url).build().toUri();
	return restTemplate.exchange(uri, HttpMethod.GET, new HttpEntity<String>(getHeaders()), String.class);
    }

    private HttpHeaders getHeaders() {
	HttpHeaders headers = new HttpHeaders();
	headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
	headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
	headers.add(API_CLIENT_ID, DEFAULT_CLIENT);
	headers.add(CONSENT_STATUS, "optedIn");
	headers.add(REQUEST_ID, "20171108123350148");
	return headers;
    }
}
