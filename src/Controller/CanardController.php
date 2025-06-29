<?php

namespace App\Controller;

use App\Entity\Canard;
use App\Form\DuckForm;
use App\Entity\Produit;
use App\Form\CanardType;
use App\Entity\Commentaire;
use App\Form\CommentaireFormType;
use App\Repository\CanardRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\CommentaireRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CanardController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function home(CanardRepository $canardRepository): Response
    {
        $dernierCanards = $canardRepository->findBy([], ['id' => 'ASC'], 4);

        return $this->render('home/index.html.twig', [
            'dernierCanards' => $dernierCanards,
        ]);
    }

    #[Route('/canard/{id}', name: 'canard_show')]
    public function show(Canard $canard, CommentaireRepository $commentaireRepository, Request $request, EntityManagerInterface $entityManager): Response
    {
        $commentaires = $commentaireRepository->findBy(['canard' => $canard], ['createdAt' => 'DESC']);
        $commentaire = new Commentaire();
        $form = null;

        if ($this->getUser()) {
            $form = $this->createForm(CommentaireFormType::class, $commentaire);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $commentaire->setUser($this->getUser());
                $commentaire->setCanard($canard);
                $commentaire->setCreatedAt(new \DateTimeImmutable());

                $entityManager->persist($commentaire);
                $entityManager->flush();

                return $this->redirectToRoute('canard_show', ['id' => $canard->getId()]);
            }
        }

        return $this->render('canard/show.html.twig', [
            'canard' => $canard,
            'commentaires' => $commentaires,
            'commentForm' => $form ? $form->createView() : null,
        ]);
    }

    #[Route('/canard/new', name: 'canard_new')]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté pour créer un canard.');
        }
        $produit = new Produit();
        $canard = new Canard();
        $form = $this->createForm(DuckForm::class, $canard);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $produit->setUser($user);

            $entityManager->persist($canard);
            $entityManager->flush();

            return $this->redirectToRoute('canard_show', ['id' => $canard->getId()]);
        }

        return $this->render('canard/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}