import NotFoundImage from "@assets/not-found.png";
import Button from "@components/UI/Button";

function NotFoundPage() {
  return (
    <div className="not-found-page py-5 md:py-10">
      <div className="container flex flex-col items-center gap-2">
        <img src={NotFoundImage} alt="Not Found Image" />
        <div className="text-container mb-2 text-center md:max-w-150">
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Oops! page not found</h2>
          <p className="text-gray-500">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
        </div>
        <Button to={'/'}>
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage;