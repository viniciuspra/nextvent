export function Ticket() {
  return (
    <div className="max-w-sm mx-auto bg-card rounded-lg overflow-hidden shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Ticket Title</h2>
          <p className="text-primary-foreground">Ticket subtitle</p>
        </div>
        <div className="text-right">
          <span className="text-primary-foreground text-sm">10 de Fevereiro</span>
          <span className="text-primary-foreground text-sm block">12:00 PM</span>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-4">
        <div className="flex justify-between items-center">
          <span className="bg-primary-foreground text-secondary px-3 py-1 rounded-full text-xs">
            Row A
          </span>
          <span className="bg-primary-foreground text-secondary px-3 py-1 rounded-full text-xs">
            Seat 5
          </span>
        </div>
        <div className="text-center mt-4">
          <span className="text-primary-foreground text-sm">Admit One</span>
        </div>
      </div>
    </div>
  );
}
