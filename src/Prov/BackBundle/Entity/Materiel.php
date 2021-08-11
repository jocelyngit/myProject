<?php

namespace Prov\BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Materiel
 *
 * @ORM\Table(name="materiel")
 * @ORM\Entity(repositoryClass="Prov\BackBundle\Repository\MaterielRepository")
 */
class Materiel
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
     * @ORM\ManyToOne(targetEntity="Prov\BackBundle\Entity\TypeMateriel",inversedBy="materiels")
     * @ORM\JoinColumn(nullable=true)
     */
    private $typeMateriel;

    /**
     * @ORM\ManyToOne(targetEntity="Prov\BackBundle\Entity\Conditionnement",inversedBy="materiels")
     * @ORM\JoinColumn(nullable=true)
     */
    private $conditionnement;

    /**
     * @ORM\OneToMany(targetEntity="Prov\BackBundle\Entity\Demande", mappedBy="materiel")
     */
    private $demandes;

    /**
     * @var string
     *
     * @ORM\Column(name="designation", type="string", length=200, unique=true)
     */
    private $designation;


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
     * Set designation
     *
     * @param string $designation
     *
     * @return Materiel
     */
    public function setDesignation($designation)
    {
        $this->designation = $designation;

        return $this;
    }

    /**
     * Get designation
     *
     * @return string
     */
    public function getDesignation()
    {
        return $this->designation;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->demandes = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set typeMateriel
     *
     * @param \Prov\BackBundle\Entity\TypeMateriel $typeMateriel
     *
     * @return Materiel
     */
    public function setTypeMateriel(\Prov\BackBundle\Entity\TypeMateriel $typeMateriel = null)
    {
        $this->typeMateriel = $typeMateriel;

        return $this;
    }

    /**
     * Get typeMateriel
     *
     * @return \Prov\BackBundle\Entity\TypeMateriel
     */
    public function getTypeMateriel()
    {
        return $this->typeMateriel;
    }

    /**
     * Set conditionnement
     *
     * @param \Prov\BackBundle\Entity\Conditionnement $conditionnement
     *
     * @return Materiel
     */
    public function setConditionnement(\Prov\BackBundle\Entity\Conditionnement $conditionnement = null)
    {
        $this->conditionnement = $conditionnement;

        return $this;
    }

    /**
     * Get conditionnement
     *
     * @return \Prov\BackBundle\Entity\Conditionnement
     */
    public function getConditionnement()
    {
        return $this->conditionnement;
    }

    /**
     * Add demande
     *
     * @param \Prov\BackBundle\Entity\Demande $demande
     *
     * @return Materiel
     */
    public function addDemande(\Prov\BackBundle\Entity\Demande $demande)
    {
        $this->demandes[] = $demande;

        return $this;
    }

    /**
     * Remove demande
     *
     * @param \Prov\BackBundle\Entity\Demande $demande
     */
    public function removeDemande(\Prov\BackBundle\Entity\Demande $demande)
    {
        $this->demandes->removeElement($demande);
    }

    /**
     * Get demandes
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getDemandes()
    {
        return $this->demandes;
    }
}
