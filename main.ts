control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (LastValue != control.eventValue()) {
        if (control.eventValue() == 1) {
            robotbit.MotorRun(robotbit.Motors.M1A, 220)
            robotbit.MotorRun(robotbit.Motors.M1B, 220)
            robotbit.MotorRun(robotbit.Motors.M2A, 220)
            robotbit.MotorRun(robotbit.Motors.M2B, 220)
            led.plot(2, 0)
        } else if (control.eventValue() == 3) {
            robotbit.MotorRun(robotbit.Motors.M1A, -220)
            robotbit.MotorRun(robotbit.Motors.M1B, -220)
            robotbit.MotorRun(robotbit.Motors.M2A, -220)
            robotbit.MotorRun(robotbit.Motors.M2B, -220)
            led.plot(2, 4)
        } else if (control.eventValue() == 5) {
            robotbit.MotorRun(robotbit.Motors.M1A, -220)
            robotbit.MotorRun(robotbit.Motors.M1B, 220)
            robotbit.MotorRun(robotbit.Motors.M2A, 220)
            robotbit.MotorRun(robotbit.Motors.M2B, -220)
            led.plot(0, 2)
        } else if (control.eventValue() == 7) {
            robotbit.MotorRun(robotbit.Motors.M1A, 220)
            robotbit.MotorRun(robotbit.Motors.M1B, -220)
            robotbit.MotorRun(robotbit.Motors.M2A, -220)
            robotbit.MotorRun(robotbit.Motors.M2B, 220)
            led.plot(4, 2)
        } else if (control.eventValue() == 13) {
            robotbit.MotorRun(robotbit.Motors.M1A, -220)
            robotbit.MotorRun(robotbit.Motors.M1B, 220)
            robotbit.MotorRun(robotbit.Motors.M2A, -220)
            robotbit.MotorRun(robotbit.Motors.M2B, 220)
        } else if (control.eventValue() == 15) {
            robotbit.MotorRun(robotbit.Motors.M1A, 220)
            robotbit.MotorRun(robotbit.Motors.M1B, -220)
            robotbit.MotorRun(robotbit.Motors.M2A, 220)
            robotbit.MotorRun(robotbit.Motors.M2B, -220)
        } else {
            motor.motorStopAll()
            basic.clearScreen()
        }
    }
})
let LastValue = 0
LastValue = 0
bluetooth.startLEDService()
basic.showIcon(IconNames.Happy)
