import Head from 'next/head'
import { Heading, Box, Image, Stack, Text } from "@chakra-ui/react"
import axios from "axios"
import Product from "../interfaces/Product"
import Logo from "../../components/Logo"

interface props {
  product: Product | undefined
}

const Product = ({ product }: props) => {
  return (
    <>
      <Head>
        <title>Product </title>
      </Head>
      <Logo />


      {product
        ? <>
          <Heading textAlign="center" fontSize="2xl" marginTop="1em">Producto {product.id}</Heading>
          <Box
            p={6}
            maxW={'500px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            cursor={'pointer'}
            _hover={{ transform: "scale(1.05)", transition: 'all .2s ease', }}
            mx="auto"
            my={10}
          >
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${product.image_url})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
            >
              <Image
                rounded={'lg'}
                height={230}
                width={500}
                objectFit={'contain'}
                src={product.image_url}
                alt={product.name}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {product.name}
              </Heading>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {product.description}
              </Text>
              <Text color={'gray.600'}>
                ${product.price}
              </Text>
            </Stack>
          </Box> </>
        : <Text color={'red.600'}> NOT FOUND </Text>}
    </>
  )
}


export async function getServerSideProps(context) {
  let product = null;

  try {
    product = await axios.get<Product>(`/product/${context.params.id}`);
    product = product.data
  } catch (e) { }

  return {
    props: { product }
  }

}

export default Product
