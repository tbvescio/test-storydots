import Head from 'next/head'
import { useRouter } from 'next/router'
import { SimpleGrid, Heading, Button, HStack, Box, useDisclosure, Modal, NumberInput, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper, NumberInputField, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, Input, ModalOverlay, FormLabel, ModalFooter } from "@chakra-ui/react"
import axios from "axios"
import Product from "../interfaces/Product"
import ProductCard from "../components/ProductCard"
import { useState } from 'react'
import Logo from "../components/Logo"

interface props {
  products: Product[]
}

const Home = ({ products }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [formData, setFormData] = useState({})
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    await axios.post("/product", formData)
    router.reload()
  }

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>

      <HStack marginTop="1em" mx="auto" width="30em" spacing={10}>
        <Logo />
        <Button colorScheme="red" onClick={onOpen}>Crear producto</Button>
      </HStack>
      <Heading textAlign="center" fontSize="2xl" marginTop="1em">Productos 👇</Heading>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="name" onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input name="description" onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image Url</FormLabel>
              <Input name="image_url" onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <NumberInput name="price" onChange={(e) => setFormData({ ...formData, price: e })}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleSubmit}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <SimpleGrid minChildWidth="300px" spacing={5} margin="7em">
        {products.map((product: Product) => <ProductCard id={product.id} name={product.name} price={product.price} image_url={product.image_url} key={product.id} />)}
      </SimpleGrid>
    </>
  )
}


export async function getStaticProps() {
  const products = await axios.get<Product[]>("/products");

  return {
    props: { products: products.data },
    revalidate: 1 // Se va a revalidar cada 1 seg, en prod puede ser mucho mas
  }
}

export default Home
