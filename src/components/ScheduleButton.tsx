import Link from "next/link";

type ScheduleButtonProps = {
  className?: string;
};

export default function ScheduleButton({
  className = "",
}: ScheduleButtonProps) {
  return (
    <Link
      href="/schedule-service"
      className={`inline-flex items-center justify-center rounded-md bg-[var(--primary-green)] px-6 py-3 text-white font-semibold transition hover:bg-[var(--primary-green-dark)] ${className}`}
    >
      Schedule Service
    </Link>
  );
}
