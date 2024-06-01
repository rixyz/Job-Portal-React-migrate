import { notifications } from "@mantine/notifications";

export function showSuccess(message: string) {
  notifications.show({
    withCloseButton: true,
    autoClose: 5000,
    title: "Sucess",
    message,
    color: "green",
    withBorder: true,
  });
}

export function showError(message: string) {
  notifications.show({
    withCloseButton: true,
    autoClose: 5000,
    title: "Something went wrong!",
    message,
    color: "red",
    withBorder: true,
  });
}
