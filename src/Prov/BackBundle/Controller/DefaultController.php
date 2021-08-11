<?php

namespace Prov\BackBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="back_accueil")
     */
    public function indexAction()
    {
        return $this->render('@ProvBack/Default/index.html.twig');
    }
}
