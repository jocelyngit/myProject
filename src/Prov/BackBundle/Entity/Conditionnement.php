<?php

namespace Prov\BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Conditionnement
 *
 * @ORM\Table(name="conditionnement")
 * @ORM\Entity(repositoryClass="Prov\BackBundle\Repository\ConditionnementRepository")
 */
class Conditionnement
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\OneToMany(targetEntity="Prov\BackBundle\Entity\Materiel", mappedBy="conditionnement")
     */
    private $materiels;

    /**
     * @var string
     *
     * @ORM\Column(name="libelle", type="string", length=80, nullable=false, unique=true)
     */
    private $libelle;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set libelle
     *
     * @param string $libelle
     *
     * @return Conditionnement
     */
    public function setLibelle($libelle)
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * Get libelle
     *
     * @return string
     */
    public function getLibelle()
    {
        return $this->libelle;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->materiels = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add materiel
     *
     * @param \Prov\BackBundle\Entity\Materiel $materiel
     *
     * @return Conditionnement
     */
    public function addMateriel(\Prov\BackBundle\Entity\Materiel $materiel)
    {
        $this->materiels[] = $materiel;

        return $this;
    }

    /**
     * Remove materiel
     *
     * @param \Prov\BackBundle\Entity\Materiel $materiel
     */
    public function removeMateriel(\Prov\BackBundle\Entity\Materiel $materiel)
    {
        $this->materiels->removeElement($materiel);
    }

    /**
     * Get materiels
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getMateriels()
    {
        return $this->materiels;
    }
}
