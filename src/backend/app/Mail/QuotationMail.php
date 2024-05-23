<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class QuotationMail extends Mailable
{
    use Queueable;
    use SerializesModels;

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

        $mail->markdown($this->view);

        return $mail;
    }
}
