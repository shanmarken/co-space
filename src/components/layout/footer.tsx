export default function Footer() {
  return (
    <footer className="bg-card mt-auto py-6 border-t">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} SpaceBooker. All rights reserved.</p>
      </div>
    </footer>
  );
}
