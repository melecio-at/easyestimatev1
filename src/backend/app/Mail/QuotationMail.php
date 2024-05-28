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
    public $details;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(array $projectDetails) //Array $user, Array $details
    {
        $this->details = $projectDetails;
        $this->email = $this->details['email_address'];
        $this->name =  $this->details['name'];
        $this->view = 'mail.quotation.quotationmail';
        $this->subject = env('EMAIL_SUBJECT');
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $mail = $this->subject($this->subject)
            ->from(env('EMAIL_FROM_ADDRESS'), env('EMAIL_FROM_NAME'))
            ->to($this->email, customMailTo($this->name))
            ->bcc(env('EMAIL_FROM_ADDRESS'));

        $mail->markdown($this->view)
            ->with([
                'user' => $this->details,
                'project' => $this->details['projectDetail'],
                'fromAddress' => env('EMAIL_FROM_ADDRESS'),
            ]);

        return $mail;
    }
}
