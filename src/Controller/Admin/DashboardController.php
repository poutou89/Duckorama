<?php

namespace App\Controller\Admin;

use App\Entity\Tag;
use App\Entity\User;
use App\Entity\Canard;
use App\Repository\UserRepository;
use App\Repository\CanardRepository;
use Symfony\Component\HttpFoundation\Response;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

#[IsGranted('ROLE_ADMIN')]
#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class DashboardController extends AbstractDashboardController
{
    private UserRepository $userRepository;
    private CanardRepository $canardRepository;

    public function __construct(UserRepository $userRepository, CanardRepository $canardRepository)
    {
        $this->userRepository = $userRepository;
        $this->canardRepository = $canardRepository;
    }

    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $userCount = $this->userRepository->count([]);
        $canardCount = $this->canardRepository->count([]);

        return $this->render('admin/admin.html.twig', [
            'userCount' => $userCount,
            'canardCount' => $canardCount,
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Duckorama');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa-solid fa-gauge');
        yield MenuItem::linkToCrud('Canard', 'fa-solid fa-cart-shopping', Canard::class);
        yield MenuItem::linkToCrud('user', 'fa-solid fa-users', User::class);
        yield MenuItem::linkToCrud('Tag', 'fa-solid fa-tag', Tag::class);
        yield MenuItem::linkToRoute('home','fa-solid fa-chevron-left', 'app_accueil' );
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}
