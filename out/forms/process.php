<?php
include("config.php");
include("functions.php");
$endPointApi = $config->dashboardApi->endPoint."leads";
$apiAuthToken = $config->dashboardApi->token;
if (isset($_POST["name"]) && !empty($_POST["name"])) { ?>
   
    <?php 
       $leadData1 = formatApiLeadData($_POST);
       //print_r($leadData1);exit;
       $leadData = json_encode($leadData1);
       $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => $endPointApi,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS =>  $leadData,
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization: Bearer '. $apiAuthToken
        ),
    ));
    $response = curl_exec($curl);
    $response = json_decode($response);
    $parameter = null;
    if(isset($response->token) && !empty($response->token)){
       $parameter ="?ap=".$response->token."&package=".$leadData1["package"]."&amount=".$leadData1["amount"]."&cn=".$_POST["name"]."&em=".$_POST["email"];
       
    }
    //echo json_encode(['status' => true,'redirectUrl' => "/lp-new/thank-you"]);


    ?>
    <script type="text/javascript">
        window.location.replace("/thank-you<?php echo $parameter;?>");
    </script>
<?php } else {
    ///redirect to index file
?>
    <script type="text/javascript">
        window.location.replace("/");
    </script>

<?php } ?>


