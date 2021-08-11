<?php

namespace Prov\BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TypeMateriel
 *
 * @ORM\Table(name="type_materiel")
 * @ORM\Entity(repositoryClass="Prov\BackBundle\Repository\TypeMaterielRepository")
 */
class TypeMateriel
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
     * @ORM\OneToMany(targetEntity="Prov\BackBundle\Entity\Materiel", mappedBy="typeMateriel")
     */
    private $materiels;

    /**
     * @var string
     *
     * @ORM\Column(name="libelle", type="string", length=120, unique=true)
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
     * @return TypeMateriel
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
     * @return TypeMateriel
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
