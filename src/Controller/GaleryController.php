<?php

namespace App\Controller;

use App\Form\CanardFilterForm;
use App\Repository\CanardRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class GaleryController extends AbstractController
{
        #[Route('/galery', name: 'app_galery')]
        public function index(CanardRepository $repository, Request $request): Response
        {
            $form = $this->createForm(CanardFilterForm::class);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $data = $form->getData();
                $price = $data->getPrice();
                $tags = [];

                foreach ($data->getTag() as $tag) {
                    $tags[] = $tag->getId();
                }

                $canards = $repository->filterForm($tags, $price);
            } else {
                $canards = $repository->findAll();
            }

            return $this->render('galery/galery.html.twig', [
                'canards' => $canards,
                'DuckForm' => $form->createView(),
            ]);
        }
}
