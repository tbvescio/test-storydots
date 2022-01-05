import React, { ReactElement } from 'react'
import { Heading } from "@chakra-ui/react"
import Link from "next/link"

function Logo(): ReactElement {
    return (
        <>
            <Link href="/" passHref>
                <Heading textAlign="center" fontWeight="extrabold" my="1em" cursor="pointer" _hover={{ transform: "scale(1.1)" }}>Tienda Story</Heading>
            </Link>
        </>
    )
}

export default Logo
