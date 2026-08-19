import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, Shield, Code, Server, Activity } from 'lucide-react';

const codeSnippets = [
  {
    id: 'controller',
    name: 'HospitalController.java',
    lang: 'Java',
    badge: 'Spring Boot REST',
    code: `@RestController
@RequestMapping("/api/v1/patients")
@CrossOrigin(origins = "*")
public class PatientController {

    private final PatientService patientService;
    private final TokenValidator tokenValidator;

    @Autowired
    public PatientController(PatientService service, TokenValidator validator) {
        this.patientService = service;
        this.tokenValidator = validator;
    }

    @PostMapping("/register")
    @PreAuthorize("hasRole('ADMIN') or hasRole('DOCTOR')")
    public ResponseEntity<ApiResponse<PatientDTO>> registerPatient(
            @Valid @RequestBody PatientRequest request,
            @RequestHeader("Authorization") String authHeader) {
        
        // Validate JWT & extracted claims
        String doctorId = tokenValidator.extractUserId(authHeader);
        
        PatientDTO created = patientService.registerPatient(request, doctorId);
        
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(ApiResponse.success("Patient registered successfully", created));
    }
}`
  },
  {
    id: 'feign',
    name: 'DoctorFeignClient.java',
    lang: 'Java',
    badge: 'OpenFeign Inter-Service',
    code: `@FeignClient(name = "DOCTOR-SERVICE", configuration = FeignConfig.class)
public interface DoctorClient {

    @GetMapping("/api/v1/doctors/{id}/availability")
    ResponseEntity<DoctorScheduleDTO> getDoctorAvailability(
            @PathVariable("id") String doctorId,
            @RequestParam("date") LocalDate date
    );

    @PostMapping("/api/v1/doctors/slots/reserve")
    ResponseEntity<SlotReservationResponse> reserveAppointmentSlot(
            @RequestBody SlotReservationRequest request
    );
}`
  },
  {
    id: 'security',
    name: 'JwtSecurityConfig.java',
    lang: 'Java',
    badge: 'Spring Security 6',
    code: `@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(AbstractHttpConfigurer::disable)
            .cors(Customizer.withDefaults())
            .sessionManagement(sess -> sess.sessionCreationPolicy(STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/eureka/**").permitAll()
                .requestMatchers("/api/v1/payments/verify").authenticated()
                .anyRequest().authenticated()
            )
            .authenticationProvider(authProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}`
  }
];

export default function TerminalSnippet() {
  const [activeTab, setActiveTab] = useState(codeSnippets[0].id);
  const [copied, setCopied] = useState(false);

  const currentSnippet = codeSnippets.find(s => s.id === activeTab) || codeSnippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0b1120] border border-slate-700/70 shadow-2xl shadow-emerald-950/20 overflow-hidden font-mono text-xs">
      
      {/* Terminal Top Bar */}
      <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50"></div>
          <span className="ml-2 text-slate-400 font-medium text-[11px] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            backend-core/spring-boot-architecture
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {currentSnippet.badge}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1"
            title="Copy Code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[10px] text-slate-400 hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* File Tabs */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-[#090d16] border-b border-slate-800/80 overflow-x-auto">
        {codeSnippets.map((snippet) => (
          <button
            key={snippet.id}
            onClick={() => setActiveTab(snippet.id)}
            className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === snippet.id
                ? 'bg-[#0b1120] text-emerald-400 border-t-2 border-emerald-400 font-semibold'
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            <Code className="w-3 h-3 text-slate-400" />
            {snippet.name}
          </button>
        ))}
      </div>

      {/* Code Editor Window */}
      <div className="p-4 sm:p-5 overflow-x-auto text-[12px] leading-relaxed text-slate-200 bg-[#0b1120] select-text">
        <pre className="font-mono">
          <code>
            {currentSnippet.code.split('\n').map((line, idx) => {
              // Simple syntax colorizer for Java annotations, keywords, and strings
              let formattedLine = line;
              const isAnnotation = line.trim().startsWith('@');
              const isComment = line.trim().startsWith('//');

              return (
                <div key={idx} className="table-row group">
                  <span className="table-cell pr-4 text-right select-none text-slate-600 group-hover:text-slate-400 text-[11px]">
                    {idx + 1}
                  </span>
                  <span className="table-cell whitespace-pre">
                    {isComment ? (
                      <span className="text-slate-500 italic">{line}</span>
                    ) : isAnnotation ? (
                      <span className="text-purple-400 font-semibold">{line}</span>
                    ) : (
                      line.split(' ').map((word, wordIdx) => {
                        if (['public', 'private', 'final', 'class', 'interface', 'return', 'new', 'import', 'package'].includes(word)) {
                          return <span key={wordIdx} className="text-pink-400 font-medium">{word} </span>;
                        }
                        if (['ResponseEntity', 'String', 'HttpStatus', 'PatientDTO', 'PatientRequest', 'LocalDate', 'SecurityFilterChain', 'HttpSecurity'].includes(word)) {
                          return <span key={wordIdx} className="text-cyan-300 font-medium">{word} </span>;
                        }
                        if (['registerPatient', 'filterChain', 'extractUserId', 'getDoctorAvailability'].includes(word.replace(/\(.*/, ''))) {
                          return <span key={wordIdx} className="text-amber-300">{word} </span>;
                        }
                        return <span key={wordIdx}>{word} </span>;
                      })
                    )}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Terminal Bottom Status Bar */}
      <div className="bg-[#090d16] px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400">
            <Activity className="w-3 h-3 animate-pulse" />
            Spring Boot 3.2+ / Java 17
          </span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="hidden sm:inline-block text-slate-400">UTF-8</span>
          <span className="hidden sm:inline-block text-slate-400">LF</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span>Maven: 3.9+</span>
          <span>Docker: Ready</span>
        </div>
      </div>

    </div>
  );
}
