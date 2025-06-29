<?php

namespace App\Controller;

use App\Repository\CanardRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class GaleryController extends AbstractController
{
    #[Route('/galery', name: 'app_galery')]
    public function index( CanardRepository $repository): Response
    {
        $canards = $repository->findAll();
        return $this->render('galery/galery.html.twig', [
            'canards'=>$canards,
        ]);
    }
}
