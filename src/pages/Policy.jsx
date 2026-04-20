import { Shield, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const policyData = {
  main: {
    title: 'Privacy Policy',
    effectiveDate: 'April 5, 2026',
    content: [
      {
        title: 'Summary',
        text: 'Highlighter is designed to work locally on your device. It uses your camera and microphone to let you record sessions, mark highlights, and create montage videos. The app does not require an account and is designed not to send your recorded content to the developer\'s servers for app functionality.'
      },
      {
        title: '1. Scope',
        text: 'This Privacy Policy applies to the Highlighter mobile application.'
      },
      {
        title: '2. What the app accesses',
        text: 'Highlighter may access the following device features and data to provide its functionality: Camera to show a live preview and record video sessions, Microphone to record audio with video sessions, Photos/media library/device storage to save exported montage videos and access files created by the app, Optional connected-device or remote trigger interactions on supported platforms.'
      },
      {
        title: '3. How the app uses this information',
        text: 'Highlighter uses these permissions and features to: record a session video, store highlight timestamps or ranges, create a montage video on device, save the exported montage to your gallery or photo library, share the exported file when you choose to do so.'
      },
      {
        title: '4. Local processing',
        text: 'Highlighter is designed so that recording, highlight processing, and montage creation happen locally on your device. The app does not require an account or sign-in for its main features.'
      },
      {
        title: '5. Data sharing and sale',
        text: 'The app is designed not to sell your personal information and not to share your recorded videos or highlights with the developer for app functionality. If you choose to use your device\'s built-in sharing features, the file will be shared only with the destination you select.'
      },
      {
        title: '6. Data retention',
        text: 'Highlighter may create temporary files while recording or exporting. These temporary files are intended to support app functionality and may be deleted by the app during cleanup. Final exported videos remain on your device until you remove them from your gallery, photo library, or storage.'
      },
      {
        title: '7. Third-party services',
        text: 'Highlighter relies on platform features provided by Apple, Google, and the operating system to access the camera, microphone, media library, and sharing features. Those platform providers may handle data according to their own privacy policies.'
      },
      {
        title: '8. Children\'s privacy',
        text: 'Highlighter is not directed to children under 13, and the developer does not knowingly collect personal information from children through the app.'
      },
      {
        title: '9. Security',
        text: 'The app is designed to keep recorded content on your device unless you choose to save or share it through platform features. No method of storage or transmission is guaranteed to be completely secure.'
      },
      {
        title: '10. Changes to this policy',
        text: 'This Privacy Policy may be updated from time to time. Updated versions should be published at the same public URL used for the app listing.'
      },
      {
        title: '11. Contact',
        text: 'If you have questions about this Privacy Policy, use the support contact listed in the app store listing for Highlighter.'
      }
    ]
  },
  edit: {
    title: 'Privacy Policy',
    effectiveDate: 'April 19, 2026',
    content: [
      {
        title: 'Overview',
        text: 'Highlighter:edit is designed to help users capture, edit, and save highlight moments from video recordings. Our goal is to keep your experience simple and privacy-conscious.'
      },
      {
        title: 'Information We Collect',
        text: 'We may collect information you choose to provide directly, such as support requests or feedback, and contact information when contacting support. To provide core app functionality, Highlighter:edit may access Camera, Microphone, Photos or media library, and local files or device storage.'
      },
      {
        title: 'How We Use Information',
        text: 'We use information to: provide and operate the app\'s features, save, export, and share edited content, respond to support inquiries, diagnose bugs and improve app performance, maintain security and prevent misuse.'
      },
      {
        title: 'Local Processing',
        text: 'Highlighter:edit is designed so that core video capture and editing functions run locally on your device. Your videos and highlight edits are primarily processed on-device rather than sent to our servers for app functionality.'
      },
      {
        title: 'Sharing of Information',
        text: 'We do not sell your personal information. We may share information only in limited circumstances: with service providers that help us operate or support the app, when required by law, regulation, legal process, or governmental request, to protect the rights, safety, or property of users, the app, or others.'
      },
      {
        title: 'Permissions',
        text: 'Highlighter:edit may request device permissions such as: Camera (to record video), Microphone (to record audio), Photos/Media Library (to save edited videos), Storage/File Access (to export or manage video files). You can manage permissions in your device settings.'
      },
      {
        title: 'Data Retention',
        text: 'We retain information only for as long as needed to provide the app, comply with legal obligations, resolve disputes, and enforce our agreements. Media created or edited within the app may remain on your device unless you delete it.'
      },
      {
        title: 'Your Choices',
        text: 'Depending on your location, you may have rights to: access personal information we hold about you, request correction or deletion, object to certain processing, withdraw consent where processing is based on consent.'
      },
      {
        title: 'Children\'s Privacy',
        text: 'Highlighter:edit is not intended for children under the age of 13. We do not knowingly collect personal information from children.'
      },
      {
        title: 'Security',
        text: 'We take reasonable measures to protect information from unauthorized access, loss, misuse, or alteration. However, no method of transmission or storage is completely secure.'
      },
      {
        title: 'Contact Us',
        text: 'If you have questions about this Privacy Policy or your information, contact us at the GitHub issues page.'
      }
    ],
    contactUrl: 'https://github.com/crpy-dev/apps/issues'
  }
}

export default function Policy({ app }) {
  const { darkMode } = useTheme()
  const data = policyData[app]
  
  return (
    <div className="space-y-6">
      {/* Kicker */}
      <div className={`text-xs font-bold uppercase tracking-widest ${
        darkMode ? 'text-wired-yellow' : 'text-wired-red'
      }`}>
        {app === 'main' ? 'Highlighter Main' : 'Highlighter Edit'}
      </div>
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Shield className={`w-8 h-8 ${
            darkMode ? 'text-wired-yellow' : 'text-wired-red'
          }`} />
          <h1 className={`text-4xl sm:text-5xl font-black tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {data.title}
          </h1>
        </div>
        <p className={`text-sm ${
          darkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
          Effective date: {data.effectiveDate}
        </p>
      </div>
      
      {/* Policy Content */}
      <div className={`rounded-lg border p-6 sm:p-8 space-y-6 ${
        darkMode 
          ? 'bg-wired-panel border-gray-800' 
          : 'bg-white border-gray-200'
      }`}>
        {data.content.map((section, idx) => (
          <div key={idx}>
            <h2 className={`font-bold text-lg mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {section.title}
            </h2>
            <p className={`leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {section.text}
            </p>
          </div>
        ))}
        
        {data.contactUrl && (
          <div className="pt-4 border-t border-gray-700">
            <a 
              href={data.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 font-medium ${
                darkMode ? 'text-wired-yellow hover:text-wired-yellow/80' : 'text-wired-red hover:text-wired-red/80'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              Contact us on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
