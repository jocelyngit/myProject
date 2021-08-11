<?php

namespace Prov\BackBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
class MaterielType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation', TextType::class, array('required' => true))
            ->add('typeMateriel', EntityType::class, array(
                'class'        => 'ProvBackBundle:TypeMateriel',
                'choice_label' => 'libelle',
                'required' => true,
                'placeholder' => 'Selectionner',
            ))
            ->add('conditionnement',EntityType::class, array(
        'class'        => 'ProvBackBundle:Conditionnement',
        'choice_label' => 'libelle',
        'required' => true,
        'placeholder' => 'Selectionner',
    ));
    }/**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Prov\BackBundle\Entity\Materiel'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'prov_backbundle_materiel';
    }


}
