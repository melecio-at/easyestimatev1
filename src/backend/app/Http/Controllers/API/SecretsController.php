<?php

namespace App\Http\Controllers\API;

use Aws\Exception\AwsException;
use App\AwsSecretsManagerReader;
use Illuminate\Support\Facades\DB;
use Tapp\AwsSecretsManager\Secret;
use App\Http\Controllers\Controller;
use Aws\SecretsManager\SecretsManagerClient;

class SecretsController extends Controller
{
    // protected $secretsManager;

    // public function __construct(SecretsManagerClient $secretsManager)
    // {
    //     $this->secretsManager = $secretsManager;
    // }

    public function getDabaseCredentials()
    {
        // dd(env('MAIL_HOST'));
        $secretName = 'rds!db-d634eac4-b097-4e03-a9a4-e5e90a02d4a2';
        // $secret = AwsSecretsManagerReader::getSecret($secretName);
        // $dbusername = AwsSecretsManagerReader::getSecretKey("{$secretName}", 'db_username');
        // dd($secret);

        //=======================
        $client = app(SecretsManagerClient::class);

        $result = $client->getSecretValue([
            'SecretId' => $secretName,
        ]);
        dd($result);
        $secretString = $result['SecretString'];

        // Do something with the secret string
        return $secretString;
    }

    /**
     * Default page for API.
     *
     * @return Illuminate\Http\Response
     */
    public function __invoke()
    {
        return response()->json($this->response);
    }
}
