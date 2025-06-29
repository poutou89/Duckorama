<?php

namespace App\Controller;

use App\Entity\Canard;
use App\Form\DuckForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class DuckCreateController extends AbstractController
{
    #[Route('/duck/create', name: 'app_duck_create')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $duck = new Canard();

        $form = $this->createform(DuckForm::class, $duck);

        $form->handleRequest($request);
            if($form->isSubmitted() && $form->isValid()) {
                $entityManager->persist($duck);
                $entityManager->flush();
                $this->addFlash('success', 'Article ajouté avec succès !');
                return $this->redirectToRoute('app_galery');
            }
        return $this->render('duck_create/create.html.twig', [
            'DuckForm'=>$form->createView(),
        ]);
    }
}
