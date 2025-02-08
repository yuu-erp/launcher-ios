import { ApplicationType } from "../enums/application.enums";
import { ApplicationMetadata } from "../value-objects";

// 🔹 Định nghĩa chung cho vị trí ứng dụng (tránh trùng lặp)
export interface ApplicationPosition {
  width: number;
  height: number;
  x: number;
  y: number;
}

// 🔹 Giao diện chính cho một ứng dụng
export interface ApplicationProps {
  id: number;
  name: string;
  logo: string;
  url: string;
  page: number;
  position: ApplicationPosition;
  type: ApplicationType;
  metadata?: ApplicationMetadata;
}

// 🔹 Khi tạo ứng dụng, không có `id`
export type IApplicationCreatedDE = Omit<ApplicationProps, "id">;

// 🔹 Khi di chuyển ứng dụng, chỉ cần `id` + `position`
export interface MoveApplicationProps {
  id: number;
  position: ApplicationPosition;
}
