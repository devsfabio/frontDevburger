import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { userUser } from '../../hooks/UserContext';

import {
  Container,
  Form,
  InpuntConatiner,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles';
import Logo from '../../assets/logo-login.svg';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = userUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),

      {
        pending: 'Verificando seus dados',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate('/admin/pedidos');
              } else {
                navigate('/');
              }
              console.log(userData);
            }, 2000);
            return 'Seja Bem-vindo(a)👌';
          },
        },
        error: 'Email ou Senha Incorretos 🤯',
      },
    );

    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao{' '}
          <span>
            Dev Burguer!
            <br />
          </span>{' '}
          Acesse com seu
          <span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InpuntConatiner>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InpuntConatiner>
          <InpuntConatiner>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InpuntConatiner>
          <Button type="submit">Entrar</Button>
          <p>
            Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
