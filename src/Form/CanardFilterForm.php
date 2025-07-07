<?php

namespace App\Form;

use App\Entity\Tag;
use App\Entity\Canard;
use App\Entity\Produit;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\RangeType;

class CanardFilterForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('price', RangeType::class, [
                'label' => 'Puissance minimale',
                'attr' => [
                    'min' => 1,
                    'max' => 10000,
                    'value' => 0,
                    'oninput' => 'this.previousElementSibling.value = this.value', // Appelle une fonction JS pour mettre à jour l'output
                ],
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
