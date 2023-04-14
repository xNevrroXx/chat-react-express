import { Button, Container, Input, Link, Row, Spacer, Text } from '@nextui-org/react';
import { useFormik } from "formik";
import { createPath } from '../../utilits/createPath';
import { ROUTE } from '../../router/routes';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordRepeat: ""
        },
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true);
            console.log("values: ", values);
        }
    })

    return (
        <Container xs justify="center">
            <Text h1 b size={50} css={{ textAlign: "center" }}>Registration</Text>
            <Spacer y={3} />
            <Container display="flex" direction="column" as="form" css={{ width: "80%" }} onSubmit={formik.handleSubmit as any}>
                <Input
                    size="lg"
                    clearable
                    bordered
                    labelPlaceholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <Spacer y={2} />
                <Input.Password
                    size="lg"
                    bordered
                    labelPlaceholder="Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <Spacer y={2} />
                <Input.Password
                    size="lg"
                    bordered
                    labelPlaceholder="Reapeat password"
                    name="passwordRepeat"
                    onChange={formik.handleChange}
                    value={formik.values.passwordRepeat}
                />
                <Spacer y={2} />
                <Row justify="space-between" align="center" css={{ gap: 10 }}>
                    <Button type="button" bordered color="gradient">
                        <NavLink to={createPath({ path: ROUTE.AUTHORIZATION })}>Sign In</NavLink>
                    </Button>
                    <Text b>or</Text>
                    <Button type="submit">Register</Button>
                </Row>
            </Container>
        </Container>
    );
};

export default Registration;