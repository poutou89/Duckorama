<?php

namespace App\Entity;

use App\Repository\TagRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TagRepository::class)]
class Tag
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    /**
     * @var Collection<int, Canard>
     */
    #[ORM\ManyToMany(targetEntity: Canard::class, mappedBy: 'tag')]
    private Collection $canards;

    public function __construct()
    {
        $this->canards = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * @return Collection<int, Canard>
     */
    public function getCanards(): Collection
    {
        return $this->canards;
    }

    public function addCanard(Canard $canard): static
    {
        if (!$this->canards->contains($canard)) {
            $this->canards->add($canard);
            $canard->addTag($this);
        }

        return $this;
    }

    public function removeCanard(Canard $canard): static
    {
        if ($this->canards->removeElement($canard)) {
            $canard->removeTag($this);
        }

        return $this;
    }
}
