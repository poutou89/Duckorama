<?php

namespace App\Repository;

use App\Entity\Canard;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Canard>
 */
class CanardRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Canard::class);
    }

    public function findLastFour(): array
{
    return $this->createQueryBuilder('c')
        ->orderBy('c.updatedAt', 'DESC')
        ->setMaxResults(4)
        ->getQuery()
        ->getResult();
}

    public function filterForm(array $tagIds, int $price): array
{
    $qb = $this->createQueryBuilder('c')
        ->where('c.price >= :price')
        ->setParameter('price', $price);

    if (!empty($tagIds)) {
        $qb->join('c.tag', 't')
           ->andWhere('t.id IN (:tagIds)')
           ->setParameter('tagIds', $tagIds);
    }

    return $qb->getQuery()->getResult();
}

//    /**
//     * @return Canard[] Returns an array of Canard objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Canard
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
