<?php

namespace App\Form;

use App\Entity\Tag;
use App\Entity\User;
use App\Entity\Canard;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DuckForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('price')
            ->add('description')
            ->add('imageFile', VichImageType::class, [
        'required' => true,
        'label' => 'Image du canard',
        ])  
            ->add('tag', EntityType::class, [
        'class' => Tag::class,
        'choice_label' => 'nom',
        'multiple' => true,
        'expanded' => true,
        ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Canard::class,
        ]);
    }
}
