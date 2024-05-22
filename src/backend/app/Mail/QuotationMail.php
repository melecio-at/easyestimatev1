<?php

namespace App\Mail;

// use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Session;

class QuotationMail extends Mailable
{
    use Queueable, SerializesModels;

    // /**
    //  * @var Array
    //  */
    // protected $user;

    // /** @var string*/
    // protected $username;

    // /** @var string*/
    // protected $first_name;

    // /** @var string*/
    // protected $email;

    // /** @var string*/
    // protected $number__c;

    // /** @var string*/
    // protected $inv_month;

    // /** @var string*/
    // protected $inv_year;

    // /** @var string*/
    // protected $company_code;

    // /** @var string*/
    // protected $company_name;

    // /** @var string*/
    // protected $realEmail;
    /** @var string*/
    public $email;
    public $name;
    public $view;
    public $subject;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct() //Array $user, Array $details
    {
        $this->email = 'adammelecio@gmail.com';
        $this->name = 'Adam Melecio';
        $this->view = 'mail.quotation.quotationmail';
        $this->subject = 'Test Quotation Mail';
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $mail = $this->subject($this->subject)
            ->from(env('INVOICE_MAIL_FROM_ADDRESS', 'smp-stage-noreply@kingoftime.jp'))
            ->to($this->email, $this->name);


        // if ((config('app.env') !== 'production')){
        //     $mail->bcc(env('MAIL_INV_BCC','zuora-smp-dev@iv.kingoftime.jp'));
        // }

        $mail->markdown($this->view);
        // ->with([
        //     'onlineHelpText' => env('MAIL_INV_SUPPORT_TEXT', 'https://support.ta.kingoftime.jp/新しいページ'),
        //     'onlineHelpLink' => env('MAIL_INV_SUPPORT_LINK', 'https://support.ta.kingoftime.jp/hc/ja/categories/360002512953'),
        //     'number__c' => $this->number__c,
        //     'invMonth' => $this->inv_month,
        //     'invYear' => $this->inv_year,
        //     'companyName' => $this->company_name,
        //     'realEmail' => $this->realEmail,
        // ]);

        return $mail;
    }
}
