<?php

namespace Prov\BackBundle\Controller;

use Prov\BackBundle\Entity\Demande;
use Prov\BackBundle\Entity\Materiel;
use Prov\BackBundle\Entity\TypeMateriel;
use Prov\BackBundle\Form\DemandeType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
//use Symfony\Component\HttpFoundation\JsonResponse;

class DemandeController extends Controller
{
    /**
         * @Route("/demande", name="demande_route")
     */

    public function doDemande(){

        /*création du formulaire du demandeType dans le controlleur*/

        $demande = new Demande();

        $form = $this->createForm(DemandeType::class, $demande);

        /*$this->data['form'] = $form->createView();

        return $this->render('@ProvBack/Demande/demande.html.twig', $this->data);*/

        return $this->render('@ProvBack/Demande/demande.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/ajx_getmatbytype/", name="ajx_getMatByType")
     */
    public function ajaxAction(Request $request ){
        /*error_log("********RequestId" );
        error_log("id is ". $request->get('id'));
        error_log("**********requestid" );*/

        error_log("debut ****");
        $entityManager = $this->getDoctrine()->getManager();

        $id = $request->get('id');

        // preparer la requête pour retrieve materiel for the id
        /*$materiel = $this->getDoctrine()
                    ->getRepository(Materiel::class)
                    ->find($id);*/

        error_log("debut query");
        $query = $entityManager->createQuery(
            'SELECT m.id, m.designation
            FROM ProvBackBundle:Materiel m, ProvBackBundle:TypeMateriel tp
            WHERE m.typeMateriel = :id
            AND m.typeMateriel = tp.id'
        )->setParameter('id', $id);

        error_log("query result");
        $materiel = $query->getResult();

        if ($materiel == []) {

            error_log('request error');
            throw $this->createNotFoundException(
                'No product found for id '.$materiel
            );
        }else {

            error_log("response of query");
           // error_log($materiel);

            return $response =  new JsonResponse(['data' => $materiel]);

        }
    }

   /*
    * * public function listerAction()
    {
        $em = $this->getDoctrine()->getManager();
        $materiels= $em->getRepository(Materiel::class)->findAll();
        $this->data['materiels'] = $materiels;

        return $this->render('@ProvBack/Materiel/liste.html.twig', $this->data);
    }*/

    /**
     * @Route("/ajout/materiel/",
     *     name="back_ajout_materiel")
     *
     */
   /* public function ajouterAction(Request $request)
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
    }*/
}
