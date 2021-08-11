<?php

namespace Prov\BackBundle\Controller;

use Prov\BackBundle\Entity\Materiel;
use Prov\BackBundle\Form\MaterielType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class MaterielController extends Controller
{
    /**
         * @Route("/liste/materiels", name="back_liste_materiel")
     */
    public function listerAction()
    {
        $em = $this->getDoctrine()->getManager();
        $materiels= $em->getRepository(Materiel::class)->findAll();
        $this->data['materiels'] = $materiels;

        return $this->render('@ProvBack/Materiel/liste.html.twig', $this->data);
    }

    /**
     * @Route("/ajout/materiel/",
     *     name="back_ajout_materiel")
     *
     */
    public function ajouterAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $materiel = new Materiel();

        $form = $this->createForm(MaterielType::class, $materiel);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $em->persist($materiel);
            $em->flush();
            $this->get('session')->getFlashBag()->add('notice','Success !');
            return $this->redirectToRoute('back_ajout_materiel');
        }
        $this->data['materiel'] = null;
        $this->data['form'] = $form->createView();
        return $this->render('@ProvBack/Materiel/maj.html.twig', $this->data);
    }
}
