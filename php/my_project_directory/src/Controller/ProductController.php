<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\ProductCollection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/product', name: 'create_product')]
    public function createProduct(EntityManagerInterface $entityManager): Response
    {
        $productCollection = new ProductCollection();
        $productCollection->setName('Keyboard');
        $entityManager->persist($productCollection);

        $product = new Product();
        $product->setName('Keyboard');
        $product->setCollection($productCollection);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($product);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new JsonResponse('Saved new product with id '.$product->getId());
    }
}
