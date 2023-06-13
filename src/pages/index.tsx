import { Jumbotron } from "@/components/containers/Jumbotron"
import { DefaultGlobalLayout } from "@/components/layouts/DefaultGlobalLayout"
import { DefaultPageLayout } from "@/components/layouts/DefaultPageLayout"

const Home = () => {
  return (
    <DefaultGlobalLayout>
      <DefaultPageLayout>
        <DefaultPageLayout.Position jumbotron>
          <Jumbotron />
        </DefaultPageLayout.Position>
      </DefaultPageLayout>
    </DefaultGlobalLayout>
  )
}

export default Home
