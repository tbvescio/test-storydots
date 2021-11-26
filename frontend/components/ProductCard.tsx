import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
import Product from "../interfaces/Product"
import Link from "next/link"


export default function ProductSimple({ id, name, image_url, price }: Omit<Product, "description">) {
    return (
        <Link href={`/product/${id}`} passHref>
            <Box
                p={6}
                maxW={'330px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                cursor={'pointer'}
                _hover={{ transform: "scale(1.05)", transition: 'all .2s ease', }}
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
                        backgroundImage: `url(${image_url})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                >
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={image_url}
                        alt={name}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {name}
                    </Heading>
                    <Text color={'gray.600'}>
                        ${price}
                    </Text>
                </Stack>

            </Box>
        </Link>
    );
}