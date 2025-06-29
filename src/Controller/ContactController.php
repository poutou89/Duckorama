<?php

namespace App\Controller;

use App\Form\ContactForm;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, MailerInterface $mailer): Response
    {
        $form = $this->createForm(ContactForm::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $email = (new Email())
                ->from('expediteur@gmail.com')
                ->to('destinataireàlive.fr')
                ->subject('Nouveau message de contact')
                ->text(
                    "Nom: {$data['nom']}\n".
                    "Email: {$data['email']}\n\n".
                    "Message:\n{$data['message']}"
                );
                $mailer->send($email);
        }

        return $this->render('contact/contact.html.twig', [
            'ContactForm' => $form->createView(),
        ]);
    }
}
