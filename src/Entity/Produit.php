<?php

namespace App\Entity;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProduitRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: ProduitRepository::class)]
class Produit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $etat = null;

    /**
     * @var Collection<int, canard>
     */
    #[ORM\OneToMany(targetEntity: canard::class, mappedBy: 'produit')]
    private Collection $canard;

    #[ORM\ManyToOne(inversedBy: 'produits')]
    private ?user $user = null;

    public function __construct()
    {
        $this->canard = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): static
    {
        $this->etat = $etat;

        return $this;
    }

    /**
     * @return Collection<int, canard>
     */
    public function getCanard(): Collection
    {
        return $this->canard;
    }

    public function addCanard(canard $canard): static
    {
        if (!$this->canard->contains($canard)) {
            $this->canard->add($canard);
            $canard->setProduit($this);
        }

        return $this;
    }

    public function removeCanard(canard $canard): static
    {
        if ($this->canard->removeElement($canard)) {
            // set the owning side to null (unless already changed)
            if ($canard->getProduit() === $this) {
                $canard->setProduit(null);
            }
        }

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}
