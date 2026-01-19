export const LoadingSkeleton = () => (
  <div className="animate-pulse space-y-12">
    {/* Top Podcasts Skeleton */}
    <section>
      <div className="h-6 w-48 bg-podbay-surface rounded mb-6"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[new Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="w-full aspect-square bg-podbay-surface rounded-md"></div>
            <div className="h-4 w-3/4 bg-podbay-surface rounded"></div>
            <div className="h-3 w-1/2 bg-podbay-surface rounded"></div>
          </div>
        ))}
      </div>
    </section>

    {/* Top Episodes Skeleton */}
    <section>
      <div className="h-6 w-48 bg-podbay-surface rounded mb-6"></div>
      <div className="space-y-2">
        {[new Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-transparent">
            <div className="w-12 h-12 bg-podbay-surface rounded shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 w-64 bg-podbay-surface rounded"></div>
              <div className="h-3 w-32 bg-podbay-surface rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
