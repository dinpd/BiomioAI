<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);

//TODO
// uncomment to have asset middleware
//use MiniAsset\AssetConfig;
//use MiniAsset\Middleware\AssetMiddleware;
//
//$assetConfig = AssetConfig::buildFromIniFile(__DIR__ . '/../components/assets/assets.ini');
//$app->add(new AssetMiddleware($assetConfig));


$app->add(function ($request, $response, $next) {
    $this->view->offsetSet('flash', $this->flash);
    return $next($request, $response);
});