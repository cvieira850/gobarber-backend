import AppError from '@shared/errors/AppError';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/fakeUsersRepository';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const CreateUser = new CreateUserService(fakeUsersRepository);

    const user = await CreateUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });
  it('should not be able to create a new user with same e-mail from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const CreateUser = new CreateUserService(fakeUsersRepository);

    const appointment = await CreateUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(
      CreateUser.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
