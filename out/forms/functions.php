<?php
$brandId = $config->dashboardApi->brandId;
$unitId = $config->dashboardApi->unitId;
$website = $config->dashboardApi->website;
$brandName = $config->website_name;
function formatApiLeadData($request)
{
    global $brandId;
    global $unitId;
    global $website;

    return [
        "name" => $request["name"],
        "email" => $request["email"],
        "phone" => $request["phone_number"],
        "query" => (isset($request["message"]) ? $request["message"] : ''),
        "amount" => (isset($request["lead_amount"]) ? $request["lead_amount"] : '0'),
        "package" => (isset($request["package_name"]) ? $request["package_name"] : 'Get A Quote'),
        "geo" => [
            "ip" => $request["ip2loc_ip"],
            "isp" => $request["ip2loc_isp"],
            "org" => $request["ip2loc_org"],
            "country" => $request["ip2loc_country"],
            "region" => $request["ip2loc_region"],
            "city" => $request["ip2loc_city"],
        ],
        "http" => [
            "website" => $website,
            "page" => str_replace(['{', '}'], '', $request["landing_page"]),
            "referrer" => str_replace(['{', '}'], '', $request["referrer_url"]),
        ],
        "utm" => [
            "source" => $request["source"],

        ],
        "brand" => [
            "id" =>  $brandId,

        ],

        "unit" => [
            "id" =>  $unitId,
        ]

    ];
}



function brandName()
{
    global $brandName;
    return $brandName;
}

function formatApiPaymentData($request)
{
    $breakMonthYear = explode("/", $request["exp_month_year"]);
    $expMonth = $breakMonthYear['0'];
    $expYear = $breakMonthYear['1'];
    return [
        "lead" => $request["name"],
        "name" => $request["name"],
        "email" => $request["email"],
        "cc" => $request["cardnumber"],
        "expiry_year" =>  $expYear,
        "expiry_month" =>  $expMonth,
        "cvc" => $request["cvc"],
        "country" => $request["country"],
        "state" => $request["state"],
        "zip" => $request["zip"],
        "agent" => [
            "id" => (isset($request["agent"]) && !empty($request["agent"]) ? $request["agent"] : 1)
        ],
        "amount" => $request["amount"],
        "service" => (isset($request["service"]) && !empty($request["service"]) ? $request["service"] : ''),
        "description" => (isset($request["description"]) && !empty($request["description"]) ? $request["description"] : ''),

    ];
}

function phoneNumberDisplay(){
    global $config;
    return $config->phone_number_display;
}

function phoneNumberLink(){
    global $config;
    return $config->phone_number_display;
}
function contactEmail(){
    global $config;
    return $config->contact_email;
}

function address(){
    global $config;
    return $config->address;
}