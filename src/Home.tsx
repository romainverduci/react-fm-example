import { useFeatureFlags } from './feature-management'
import { namespaceFlags } from './feature-management/flags'
import { LoadingIndicator } from './LoadingIndicator'
import { useFeatureFlag } from './useFeatureFlag'
import cbLogo from './assets/CB-stacked-logo-full-color.svg'

export const Home = () => {
  const featureFlags = useFeatureFlags()

  const showMessage = true;

  if (featureFlags.loading) {
    return (
      <div className="position-relative pb-9">
        <LoadingIndicator />
      </div>
    )
  }
  return (
    <>
      <h1>CloudBees feature management React sample application</h1>
      <div className="card">
        {showMessage && (
          <p
            style={{
              color: featureFlags.default.fontColor.getValue(),
              fontSize: featureFlags.default.fontSize.getValue(),
            }}
          >
            {featureFlags.default.message.getValue()}
          </p>
        )}
      </div>

      <div className="card">
        <p className="access-platform">
          Sign in to the CloudBees platform below to modify flag values and see
          the changes reflected automatically in this application.
        </p>
        <a href="https://cloudbees.io" target="_blank">
          <img src={cbLogo} className="logo" alt="CloudBees logo" />
        </a>
      </div>
    </>
  )
}