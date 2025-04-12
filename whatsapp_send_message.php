<?php

$phone = $_GET['phone'];
$name = $_GET['name'];


if(!empty($phone) AND !empty($name) <> '') {
    
   $phone = (int)$phone; 

    $curl = curl_init();
    
    $data = [
    "phone_number" => "$phone",
    "message_body" => "Dear $name, We just added you to our contact list and are excited to connect with you! Feel free to reach out anytime if you need assistance or have any questions. Looking forward to staying in touch!",
    "contact" => [
        "first_name" => "$name",
        "country" => "United Arab Emirates",
        "language_code" => "en",
        "groups" => "Bitrix24"
        ]
    ];
    
    curl_setopt_array($curl, array(
      CURLOPT_URL => 'https://marketing.selldobuy.com/api/17ea8d2a-524b-418c-a599-1d93ab68ef18/contact/send-message',
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'POST',
      CURLOPT_POSTFIELDS => json_encode($data),
      CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',
        'Authorization: Bearer zhVdUE1u3A9S3SUaeyxFZrO7jRgnMnrywkgUkdOZCs4bM8KeAcm1EnLAhlDYkqyG'
      ),
    ));
    
    $response = curl_exec($curl);
    
    curl_close($curl);
    echo '<pre>';
    echo $response;
    echo '</pre>';

    
}else{
    
    echo 'Please chec the Data is missing.';
    
}

?>