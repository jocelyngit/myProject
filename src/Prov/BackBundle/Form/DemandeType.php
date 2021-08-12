<?php

namespace Prov\BackBundle\Form;

use Prov\BackBundle\Entity\Demande;
use Prov\BackBundle\Entity\TypeMateriel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class DemandeType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('quantite', IntegerType::class, ['required' => true])
            ->add('observation', TextareaType::class, ['required' => true])
            ->add('reference', HiddenType::class, ['required' => true])
            ->add('materiel',EntityType::class, [
        'class'        => 'ProvBackBundle:Materiel',
        'choice_label' => 'designation',
        'choice_value' => 'id',
        'required' => true,
        'placeholder' => ''
            ])
            ->add('typeMateriel', EntityType::class, [
                'class' => 'ProvBackBundle:TypeMateriel',
                'choice_label' => 'libelle',
                'choice_value' => 'id',
                'required'    => true,
                'placeholder' => '',
                'mapped' => false
            ]);
    }
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Demande::class
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'prov_backbundle_demande';
    }


}
