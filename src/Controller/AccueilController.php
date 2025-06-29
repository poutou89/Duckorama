<?php

namespace App\Controller;

use App\Repository\CanardRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class AccueilController extends AbstractController
{
    #[Route('/', name: 'app_accueil')]
    public function index(CanardRepository $canardRepository): Response
    {
        $lastCanards = $canardRepository->findLastFour();
        
        return $this->render('accueil/accueil.html.twig', [
            'lastCanards' => $lastCanards,
        ]);
    }
}
