import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Private from '../components/auth/Private'
import Profile from '../components/auth/Profile'
import Button from '../components/Button'
import Container from '../components/Container'
import Box from '../components/context/Box'
import { ThemeContextProvider } from '../components/context/ThemeContext'
import User from '../components/context/User'
import { UserContextProvider } from '../components/context/UserContext'
import List from '../components/generics/List'
import Greet from '../components/Greet'
import Heading from '../components/Heading'
import Input from '../components/Input'
import Oscar from '../components/Oscar'
import Person from '../components/Person'
import DomRef from '../components/ref/DomRef'
import MutableRef from '../components/ref/MutableRef'
import RandomNumber from '../components/restrictions/RandomNumber'
import Counter from '../components/state/Counter'
import LoggedIn from '../components/state/LoggedIn'
import CustomButton from '../components/html/CustomButton'
import styles from '../styles/Home.module.css'
import CustomInput from '../components/html/Input'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Text from '../components/polymorphic/Text'

export interface IFormInput {
    name: string;
}

const Home: NextPage = () => {

    const { control, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => {
        alert(JSON.stringify(data));
    };

    const person = {
        firstName: 'John',
        lastName: 'Doe',
    }

    const people = [
        { first: 'John', last: 'Doe' },
        { first: 'John', last: 'Doe' },
        { first: 'John', last: 'Doe' },
    ]

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div>
                {/* <Greet name="Omale" /> */}
                {/* <Person name={person} folks={people} /> */}
                {/* <Heading>
             Hello there
         </Heading> */}
                {/* <Oscar>
             <Heading>Oscar dicaprio</Heading>
         </Oscar> */}

                {/* <Button handleClick={(e, id)=>{
             console.log("button clicked", e, id);
         }} /> */}

                {/* <Input val="" handleChange={e=>console.log(e.target.value)} /> */}

                {/* <Container styles={{border: '1px solid black', padding:"1rem"}} /> */}

                {/* <LoggedIn /> */}

                {/* <Counter /> */}

                {/* <ThemeContextProvider>
            <Box />
        </ThemeContextProvider> */}

                {/* <UserContextProvider>
            <User />
        </UserContextProvider> */}

                {/* <DomRef /> */}

                {/* <MutableRef /> */}

                {/* <Private isLoggedIn={false} component={Profile} /> */}

                {/* <List
                    items={["Abobo", "Christy", "Victoria"]}
                    onClick={(item) => console.log(item)}
                />
                <List
                    items={[1, 2, 3]}
                    onClick={(item) => console.log(item)}
                /> */}

                {/* <RandomNumber value={5} isPositive /> */}

                {/* <CustomInput label="name" register={register} required /> */}

                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true, maxLength:4 }}
                        render={({ field }) => <CustomInput required {...field} />}
                    />
                    

                    <br />

                    <CustomButton type="submit" variant="primary"  >
                        Submit
                    </CustomButton>


                </form> */}

                <Text size="lg" as="h1" id='heading' >Heading</Text>
                <Text size="md" as="p" >Paragraph</Text>
                <Text size="sm" as="label" htmlFor="heading" color='secondary' >Label</Text>

            </div>
        </div>
    )
}

export default Home
