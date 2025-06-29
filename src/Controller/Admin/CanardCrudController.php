<?php

namespace App\Controller\Admin;

use App\Entity\Tag;
use App\Entity\Canard;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class CanardCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Canard::class;
        return Tag::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('nom'),
            TextEditorField::new('description'),
            IntegerField::new('price'),
            AssociationField::new('tag', 'Tag')->setFormTypeOptions([
            'by_reference' => false,
            'multiple' => true,
            'choice_label' => 'nom', 
            ]),
        ];
    }
    
}
