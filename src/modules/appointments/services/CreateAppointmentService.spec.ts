import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/fakeAppointmentsRepository';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();

    const CreateAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await CreateAppointment.execute({
      date: new Date(),
      provider_id: '234131',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('234131');
  });

  /* it('should not be able to create two appointments on the same time', () => {
    expect(1 + 2).toBe(3);
  }); */
});
